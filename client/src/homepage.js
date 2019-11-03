import React from "react";
import { Link } from "@reach/router";

export class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to MDN</h2>
        <h3>HTML Elements</h3>
        <ul>
          <li>
            <Link to="/en-US/docs/Web/HTML/Element/audio">HTML/audio</Link>
          </li>
          <li>
            <Link to="/en-US/docs/Web/HTML/Element/video">HTML/video</Link>
          </li>
          <li>
            <Link to="/en-US/docs/Web/HTML/Element/canvas">HTML/canvas</Link>
          </li>
        </ul>
        <h3>HTML Guide Pages</h3>
        <ul>
          <li>
            <Link to="/en-US/docs/Web/HTML/Element">
              Index of HTML elements
            </Link>
          </li>
          <li>
            <Link to="/en-US/docs/Learn/HTML/Introduction_to_HTML">
              Introduction to HTML
            </Link>
          </li>
          <li>
            <Link to="/en-US/docs/Web/HTML/Applying_color">
              Applying color to HTML elements using CSS
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
