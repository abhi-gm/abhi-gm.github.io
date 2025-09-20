//import React, { Component } from "react";
//import Header from "../../components/header/Header";
//import Footer from "../../components/footer/Footer";
// eslint-disable-next-line no-unused-vars
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
// eslint-disable-next-line no-unused-vars
import Organizations from "../../containers/organizations/Organizations";
// eslint-disable-next-line no-unused-vars
import PullRequests from "../../containers/pullRequests/PullRequests";
// eslint-disable-next-line no-unused-vars
import Issues from "../../containers/issues/Issues";
//import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";

/*
class Opensource extends Component {
  render() {
    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        <Organizations theme={this.props.theme} />
        <OpensourceCharts theme={this.props.theme} />
        <PullRequests theme={this.props.theme} />
        <Issues theme={this.props.theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
*/

import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { blogHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/blogs.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="opensource-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {blogHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Blogs"}
          className="project-button"
          href="https://abhishek-maheshwarappa.medium.com/"
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
