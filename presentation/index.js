// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Link,
  Layout,
  Fill,
  Text,
  Notes,
  Markdown
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import preloader from "spectacle/src/utils/preloader";

const images = {
  selfie: require("../assets/selfie.jpg"),
  city: require("../assets/city.jpg")
};

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE",
    accent: "#E84359"
  },
  {
    primary: { name: "Arvo", googleFont: true, styles: ["400", "700i"] },
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide", "fade"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Accessibility
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
            on the web
          </Text>
        </Slide>
        <Slide bgImage={images.selfie} bgDarken={0.55}>
          <Heading textColor="primary" caps>
            A bit about me...
          </Heading>
          <Text textColor="primary" bold>
            Cody Loyd
          </Text>
          <Text textColor="primary">http://codyloyd.com</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading>The Plan</Heading>
          <Text textColor="primary">WHAT THE HECK IS A11Y ANYWAY</Text>
          <Text textColor="primary">FOCUS ISSUES</Text>
          <Text textColor="primary">SCREENREADERS</Text>
        </Slide>
        <Slide>
          <Heading size={2} textColor="tertiary">
            A11y is
          </Heading>
          <Heading size={4} textColor="secondary">
            making sure that your site and <em>all</em> of your content is able
            to be accessed by <em>all</em> users, even those that are using
            alternative methods to navigate your site.
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading>Lawsuits 😬</Heading>
          <Text>
            <Link
              textColor="primary"
              href="https://www.adatitleiii.com/2017/06/plaintiffs-score-another-victory-in-a-website-accessibility-lawsuit/"
            >
              Lawsuit Against Winn Dixie
            </Link>
          </Text>
          <Text>
            <Link
              textColor="primary"
              href="http://www.adasure.com/hobby-lobby-website-accessibility/"
            >
              Lawsuit Against Hobby Lobby
            </Link>
          </Text>
          <Text>
            <Link
              textColor="primary"
              href="https://www.adatitleiii.com/2017/08/website-accessibility-lawsuit-filings-still-going-strong/"
            >
              Accessibility Lawsuit Stats
            </Link>
          </Text>
          <Notes>
            <ul>
              <li>
                One source I found repoted that in the first half of 2017 there
                were more than 400 federal website accessibility lawsuits
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Types of Disability
          </Heading>
          <Layout>
            <Fill>
              <Text
                margin="0"
                padding="60px"
                bold
                bgColor="tertiary"
                textColor="primary"
                fill
              >
                Motor
              </Text>
            </Fill>
            <Fill>
              <Text
                margin="0"
                padding="60px"
                bgColor="primary"
                textColor="tertiary"
                bold
                fill
              >
                Visual
              </Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text
                margin="0"
                padding="60px"
                bold
                fill
                bgColor="primary"
                textColor="tertiary"
              >
                Auditory
              </Text>
            </Fill>
            <Fill>
              <Text
                margin="0"
                padding="60px"
                bold
                bgColor="tertiary"
                textColor="primary"
                fill
              >
                Cognitive
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading textColor="primary">A BUNCH OF DEMOS</Heading>
          <Text>
            <Link textColor="secondary" href="https://webaim.org/">
              WebAIM.org
            </Link>
          </Text>
          <Text>
            <Link textColor="secondary" href="https://reactjs.org/">
              ReactJS.org
            </Link>
          </Text>
          <Text>
            <Link textColor="secondary" href="https://webpack.js.org/">
              webpack.js.org
            </Link>
          </Text>
        </Slide>
        <Slide bgImage={images.city} bgDarken={0.75}>
          <Heading>Focus Issues</Heading>
          <Text>
            <Link
              textColor="primary"
              href="https://codepen.io/codyloyd/pen/yvRRWO"
            >
              DOM Order CodePen
            </Link>
          </Text>
          <Text>
            <Link
              textColor="primary"
              href="https://codepen.io/codyloyd/pen/bLmQqV"
            >
              Fancy Button CodePen
            </Link>
          </Text>
          <Text>
            <Link
              textColor="primary"
              href="https://codepen.io/codyloyd/pen/KQGbaR"
            >
              Button Reset CodePen
            </Link>
          </Text>
          <Text>
            <Link
              textColor="primary"
              href="https://codepen.io/codyloyd/pen/gvBqre"
            >
              Accessible Menu CodePen
            </Link>
          </Text>
          <Text>
            <Link
              textColor="primary"
              href="https://codepen.io/codyloyd/pen/ZrxNRM"
            >
              Roving Focus CodePen
            </Link>
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading fill textColor="primary">
            Let's talk about
          </Heading>
          <Heading fill textColor="secondary">
            Screen-Readers
          </Heading>
        </Slide>
        <Slide>
          <Heading>Where to learn more!</Heading>
          <Text>
            <Link
              textColor="secondary"
              href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g"
            >
              a11ycasts
            </Link>
          </Text>
          <Text>
            <Link textColor="secondary" href="https://www.w3.org/TR/WCAG20/">
              Web Content Accessibility Guidelines
            </Link>
          </Text>
          <Text>
            <Link
              textColor="secondary"
              href="https://webaim.org/standards/wcag/checklist"
            >
              WebAIM - WCAG checklist
            </Link>
          </Text>
          <Text>
            <Link
              textColor="secondary"
              href="https://www.deque.com/products/axe/"
            >
              aXe Accessibility Testing
            </Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
