import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Navbar from './navbar';

function App() {

  return (
  <>

  <div className="hero-head"><Navbar/></div>

  <div className="hero">
    <div className="text-container">
      <p className="title">Tweakable Jira Reports</p>
      <p className="subtitle">Start with Jira reports that real managers at real companies have used for years—and tweak them for your exact needs</p>
      <a href="https://marketplace.atlassian.com/apps/1234620/orgjql?hosting=cloud&tab=overview" target="_blank" className="try-forthix-button">Try Forthix Now!</a>
    </div>
    <div className="video-container">
      <iframe width="638.4" height="360.24" src="https://www.youtube.com/embed/RhkUXejU7HI?si=1QwxRxE3Sy6P8uXj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>

  <div className="hero-body green-background">
    <div className="container">
    <p className="title2">Start from Proven Solutions</p>
    <p className="subtitle2">Every report is based on years of daily use by hundreds of Technical Program Managers in real organizations solving really tough problems. Each is the culmination of dozens of enhancements from execs, managers, and technical program managers. Leverage Jira to make more impactful decisions and drive action—give Forthix a try.</p>
      <div className="columns">
        <div className="column">
          <p className="title3">Dynamic History</p>
          <p className="subtitle3">Instead of taking snapshots of data, use the history that Jira automatically provides.</p>
        </div>
        <div className="column">
          <p className="title3">Org Rollups</p>
          <p className="subtitle3">Select all the tickets that roll up into managers at any level. Org rollups can do this…and more.</p>
        </div>
        <div className="column">
          <p className="title3">Flex Forms</p>
          <p className="subtitle3">When you need more than a Jira Create Form but not a whole service management solution.</p>
        </div>
        <div className="column">
          <p className="title3">Custom Core</p>
          <p className="subtitle3">Your team is unique—shouldn't your Jira be, too?</p>
        </div>
      </div>
    </div>
  </div>

  <div className="hero-body purple-background">
    <div className="container">
    <p className="title2 white-text">Benefits of Forthix</p>
    <p className="subtitle2 white-text">The flexibility of Forthix apps comes from a "high-fidelity" approach to solving problems. Most tools summarize data as they go—effectively destroying information at each step. Forthix apps preserve data using a methodology called "categorical coding". Information is preserved at each step and is always available.</p>
      <div className="columns">
        <div className="column">
          <p className="title3 white-text">Tweakable by Design</p>
          <p className="subtitle3 white-text">When data is preserved at every step of report creation, it's easy to customize a report using small changes. Reports are tweakable by design.</p>
        </div>
        <div className="column">
          <p className="title3 white-text">High-fidelity Solutions</p>
          <p className="subtitle3 white-text">High-fidelity solutions are in 1-to-1 correspondence with the problems they solve. Small changes in a problem require small changes in the solution.</p>
        </div>
        <div className="column">
          <p className="title3 white-text">Concise Code</p>
          <p className="subtitle3 white-text">A high-fidelity approach means your data is never far away. That means less code, less maintenance, and more results.</p>
        </div>
      </div>
    </div>
  </div>  

  <div className="hero-body blue-background">
    <div className="container">
      <p className="title2 white-text">Features</p>
      <p className="subtitle2 white-text">These are some features of Forthix...</p>
      <div className="columns">
      <div className="column">
          <p className="title3 white-text">Dynamic History
            <li className="subtitle4 white-text">Figure out the status of tickets at any point in time</li>
            <li className="subtitle4 white-text">Compute time in status</li>
            <li className="subtitle4 white-text">Examine trends at any granularity</li>
            <li className="subtitle4 white-text">Surface a wealth of insight</li>
          </p>
        </div>
        <div className="column">
          <p className="title3 white-text">Org Rollups
            <li className="subtitle4 white-text">Summarize what needs to be done at the right level</li>
            <li className="subtitle4 white-text">Send custom reports to the right person with the right things to focus on right now</li>
            <li className="subtitle4 white-text">Absolutely essential for all but the smallest teams</li>
          </p>
        </div>
        <div className="column">
          <p className="title3 white-text">Flex Forms
            <li className="subtitle4 white-text">Structure intake info without custom fields</li>
            <li className="subtitle4 white-text">Add multi-step and branching forms</li>
            <li className="subtitle4 white-text">Relabel fields</li>
            <li className="subtitle4 white-text">Direct to self-service when it makes more sense than filing a ticket</li>
          </p>
        </div>
        <div className="column">
          <p className="title3 white-text">Custom Core
              <li className="subtitle4 white-text">Create custom reporting components and use them in multiple reports</li>
              <li className="subtitle4 white-text">Add JQL functions that roll tickets up by manager, region, team and use them anywhere in Jira</li>
              <li className="subtitle4 white-text">Drive consistency from a common, custom core</li>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="hero-foot">
    <p className="foot-text">Forthix LLC © 2024 All rights reserved.</p>
  </div>

  </>
  );
}

export default App;