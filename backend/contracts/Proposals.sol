//SPDX-License_identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Proposal is Ownable {

  struct Proposal {
    // proposal id
    uint256 id;

    // deadline of the proposal
    uint256 deadline;

    // number of upvotes the proposal gets
    uint256 upvotes;

    // number of downvotes the proposal gets
    uint256 downvotes;

    // small detail about the proposal
    string description;

    // whether the proposal is executed or not
    bool executed;

    // wheter a proposal exists or not
    bool exists;

    // whether the proposal has passed or not
    bool passed;

    // mapping to check whether a user has already voted on the proposal or not
    mapping(address => bool) voteStatus;
  }

  // mapping of proposals based on id
  mapping(uint256 => Proposal) public proposals;

  // number of proposals created
  uint256 public numProposals;

  // voting options
  enum Vote {
    YES,
    NO
  }

  // funnction to create proposal
  function createProposal(string memory _description) public returns(uint256) {
    Proposal storage newProposals = proposals[numProposals];
    newProposal.description = _description;
    newProposal.id = numProposals;
    newProposal.exists = true;
    newProposal.deadline = block.timestamp + 5 minutes;

    numProposals++;

    return numProposals -1;
  }


  // function to vote on proposals based on the nfts the user own
  function voteOnProposals(uint256 _proposalId, uint256 _votingPower, Vote _vote) public {
    
    require(proposals[_proposalId].deadline > block.timestamp, "Deadline Exceeded");
    require(proposals[_proposalId].exists, "Proposal does not exists");

    Proposal storage proposal = proposals[_proposalId];

    proposal.voteStatus[msg.sender] = true;

    if(_vote == Vote.YES) {
      proposal.upvotes += _votingPower;
    } else {
      proposal.downvotes += _votingPower;
    }
  }


  // function to execute proposal if deadline has passed
  function executeProposal(uint256 _proposalId) public {

    require(proposals[_proposalId].exists, "Proposal does not exists")
    require(proposals[_proposalId] <= block.timestamp, "Deadline not exceeded");
    require(proposals[_proposalId].executed == false, "Proposal already executed");

    Proposal storage proposal = proposals[_proposalId];

    if(proposal.upvotes > proposal.downvotes) {
      proposal.passed = true;
    }

    proposal.executed = true;

  }
}