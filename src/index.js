import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class MyHeader extends React.Component {
  render() {
    return (
      <div>
        <div className="atas">
          <img className="biopic" src="pic_bio1.png" alt="me"></img>
          <div className="atastext">
            <h1 className="besar">AYSIN BUNDRES PHAN</h1>
            <h3 className="sedang">Web Developer</h3>
          </div>
        </div>

        <div><br/></div>

        <div className="kiri">


          <div>
            <h2 className="sedang">Contact</h2>
            <hr/>
            <p><img src="icons8-call-24.png" alt="ICON"></img>&emsp;089620040530</p>
            <p><img src="icons8-email-24.png" alt="ICON"></img>&emsp;1002058460@ucsiuniversity.edu.my</p>
            <p><img src="icons8-marker-24.png" alt="ICON"></img>&emsp;Jl. T. Tambusai No.341A</p>
          </div>


          <div>
            <h2 className="sedang">Education</h2>
            <hr/>
            <p>UCSI University<br />
              Kuala Lumpur, Malaysia<br />
              B.Sc. (Hons) Business Information Systems / 2020 – present</p>
            <p>Darma Yudha High School<br />
              Pekanbaru, Indonesia<br />
              2017 - 2020</p>
          </div>


          <div>
            <h2 className="sedang">Social Media</h2>
            <hr/>
            <p><img src="icons8-github-24.png" alt="ICON"></img>&emsp;https://github.com/1002058460</p>
          </div>

        </div>


        <div className="kanan">


          <div>
            <h2 className="sedang">Profile</h2>
            <hr/>
            <p>I am enthusiastic and eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. I am easy to adapt to the environment and will learn more by watching the others and accumulating experiences. Motivated to learn, grow, and excel in the IT industry.</p>
          </div>


          <div>
            <h2 className="sedang">Technical Skills</h2>
            <hr/>
            <dl>
              <dt>Programming Languages </dt>
              <dd>- Java </dd>
              <dd>- SQL </dd>
              <dd>- Visual Basic .NET </dd>
              <dt>Internet/Web Software </dt>
              <dd>- HTML </dd>
              <dd>- CSS </dd>
              <dt>Application Software  </dt>
              <dd>- Microsoft Word </dd>
              <dd>- Microsoft PowerPoint </dd>
            </dl>
          </div>


          <div>
            <h2 className="sedang">Soft Skills</h2>
            <hr/>
            <ul>
              <li>Flexible and Adaptable </li>
              <li>Cultural awareness </li>
              <li>Responsible</li>
              <li>Multitasking abillities </li>
              <li>Time-management ability</li>
              <li>Creative and innovative thinking</li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));
