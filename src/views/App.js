import React, { Fragment } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/styles/article.css';
import '../assets/styles/article-image.css';

function App() {
  return (
    <Fragment>
      <article id="the-cosmos">
        <h1><a href="#the-cosmos">The <em>COSMOS</em> is all there is</a></h1>
        <h2>Or ever was, or will ever be</h2>

        <time dateTime="03-09-2014">MAR. 9, 2014</time>
        <p>
          <em>A generation ago</em>, the astronomer <a
          href="https://en.wikipedia.org/wiki/carl_sagan"> Carl Sagan</a> stood here and 
          launched hundreds of millions of us on a great adventure the exploration of the 
          universe revealed by science. 
          It's time to get going again. 
          We're about to begin a journey that will take us from the infinitesimal to the 
          infinite, from the dawn of time to the distant future. 
          We'll explore galaxies and suns and worlds, surf the gravity waves of space-time, 
          encounter beings that live in fire and ice, explore the planets of stars that never 
          die, discover atoms as massive as suns and universes smaller than atoms.
        </p>
        <img className="size-4" src={logo} alt=""/>
        <h3>COSMOS IS ALSO A STORY ABOUT US</h3>
        <p>
          It's the saga of how wandering bands of hunters and gatherers found their way to 
          the stars, one adventure with many heroes. 
          To make this journey, we'll need imagination.
          But imagination alone is not enough because the reality of nature is far more 
          wondrous than anything we can imagine. 
          This adventure is made possible by generations of searchers strictly adhering to a 
          simple set of rules test ideas by experiment and observation, build on those ideas 
          that pass the test, reject the ones that fail, follow the evidence wherever it 
          leads and question everything. 
          <strong>Accept these terms, and the cosmos is yours.</strong>
        </p>
      </article>
      {/* <article>
        <img className="size-4" src={logo} alt=""/>
        <img className="size-3" src={logo} alt=""/>
        <img className="size-2" src={logo} alt=""/>
        <img className="size-1" src={logo} alt=""/>
      </article> */}
      {/* <article>
        <p className="debug-center">Article</p>
      </article> */}
    </Fragment>
  );
}

export default App;
