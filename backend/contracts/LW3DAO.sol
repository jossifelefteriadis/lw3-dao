// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract LW3DAO is Ownable {

  struct Proposal {
  
    // the person who launch the proposal 
    address from;

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

    // title of the proposal
    string title;

    // pdf link of the proposal
    string pdfLink;

    // whether the proposal is executed or not
    bool executed;

    // whether a proposal exists or not
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

  // event for proposal creation
  event proposalCreated(
      uint256 id,
      string title,
      string description,
      address proposer
    );

    // event to know when a new vote is casted
    event newVote(
        uint256 upvotes,
        uint256 downvotes,
        uint256 proposal,
        address voter,
        Vote vote
    );

    // event when a proposal is executed
    event proposalResult(
        uint256 id,
        bool passed
    );

  // funnction to create proposal
  function createProposal(string memory _title, string memory _description, string memory _pdfLink) public returns(uint256) {
    Proposal storage newProposal = proposals[numProposals];
    newProposal.from = msg.sender;
    newProposal.title = _title;
    newProposal.pdfLink = _pdfLink;
    newProposal.description = _description;
    newProposal.id = numProposals;
    newProposal.exists = true;
    newProposal.deadline = block.timestamp + 5 minutes;

    numProposals++;

    emit proposalCreated(numProposals - 1, _title, _description, msg.sender);

    return numProposals - 1;
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

    emit newVote(proposal.upvotes, proposal.downvotes, _proposalId, msg.sender, _vote);
  }


  // function to execute proposal if deadline has passed
  function executeProposal(uint256 _proposalId) public {

    require(proposals[_proposalId].exists, "Proposal does not exists");
    require(proposals[_proposalId].deadline <= block.timestamp, "Deadline not exceeded");
    require(proposals[_proposalId].executed == false, "Proposal already executed");

    Proposal storage proposal = proposals[_proposalId];

    if(proposal.upvotes > proposal.downvotes) {
      proposal.passed = true;
    }

    proposal.executed = true;

    emit proposalResult(_proposalId, proposal.passed);

  }

  // function to get the address of a passed proposal 
  function getAddressFromPassedProposal(uint256 _proposalId) external view returns(address) {
    require(proposals[_proposalId].passed, "The proposal is not passed");
    return (proposals[_proposalId].from);
  }
}