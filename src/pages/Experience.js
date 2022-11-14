import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#112B3C", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            AhlalBeyt High School, Iran, Karaj
          </h3>
          <p  style={{ fontSize: "1.3rem", fontWeight: "400" }}> High School Diploma in Mathematics and Physics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" Oct 2018 - July 2022"
          iconStyle={{ background: "#112B3C", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Computer Engineering Islamic Azad University,
            Karaj Branch
          </h3>

          {/* <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4> */}

          <p style={{ fontSize: "1.3rem", fontWeight: "400" }}>
            {" "}
            During my bachelor's degree, I was a member of the Computer Science
            Association and editor-in-chief of “Baziyana magazine” (Baziyana was
            a Game-centered journal. We used to write about the story of the
            games, their characterization, and design and analyze them from a
            technical point of view. We introduced the tools used and the
            systems required for the game.) <br></br> Moreover, I became a
            teaching assistant for several courses and gave a lecture on C++ to
            freshmen.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2021 - April 2022"
          iconStyle={{ background: "#ef8354", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front-end Engineer - OPtime-AI
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Tehran, Iran</h4>
          <p  style={{ fontSize: "1.3rem", fontWeight: "400" }}>
            -Collaborating with a UX Researcher, a Back-End Engineer, a Data
            Scientist, and a Product Manager.<br></br>
            -I Implemented a B2B dashboard to serve for more than 2000 Drivers.
            (Every Postal and delivery service agencies can register to panel
            and after confirmation they define and manage their order crews by
            suggested routes to fulfil the orders). <br></br>
            -adding features like same or next-day delivery and working on
            improvements for the on-demand side of things. For track and record
            real-time data between our client-side and application we used
            socket.<br></br>
            -transitioning a large-scale React web application to React Hooks
            from Redux, which increased the page loading speed on major modern
            browsers by 70%.<br></br>
            -working on the OPTime-AI web app written in react and maintaining
            the project with integrated CI/CD features and pipelines provided by
            Gitlab.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="present"
          iconStyle={{ background: "#ef8354", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Self-Employeed</h3>

          <p>start learning more about UX design and HCI by taking courses.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
