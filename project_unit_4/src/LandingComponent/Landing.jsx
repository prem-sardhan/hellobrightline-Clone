import React from "react";
import "./styleland.css";
import { Image, AspectRatio, Heading, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import CardSlider from "./CardSlider";


const Landing = () => {
  return (
    <>
      <div className="land1">
        <div className="content">
          <div className="title">
            Built for kids and teens here for,
            <div className="slider">
              <div>confidence</div>
              <div>Relationship</div>
              <div>anxiety</div>
              <div>tough behaviour</div>
              <div>Coaches</div>
              <div>identity</div>
              <div>therapist</div>
              <div>depression</div>
            </div>
          </div>
          <h3>
            Brightline brings virtual behavioral and mental health care to
            families, when and where you need it.
          </h3>
          <a href="https://app.hellobrightline.com/sign_up">
            <button className="allbtn">Join Today</button>
          </a>
        </div>

        <div>
          {" "}
          <Image
            className="image-1"
            src="https://images.ctfassets.net/96gdpqkm7elu/4eW7qi0iZ4Z1eCoDv1Xzps/13cbf0fa4bd5bacc8fdeaab3dcf3144f/homepage_hero_daughter_hugging_dad_acb43749bb.png?w=1256&h=1570&fit=crop&fm=webp&q=90"
            alt="eror"
          />
        </div>
      </div>

      {/* LAND_______________----2___________________-LAND______________2 */}

      <div className="land2">
        <h2>Virtual care that works for kids and families</h2>
        <h3>
          School pressure, stress, IEPs, anxiety, cyberbullies, tough behavior,
          self-esteem issues — whatever families are dealing with, we have
          options that can help
        </h3>
      </div>

      {/* LAND+_______3_________________3==============3===================3======LAND3 */}

      <div className="land3">
        <div>
          <Image
            className="land3image"
            src="https://images.ctfassets.net/96gdpqkm7elu/6VA2FYCZRD8GnZjRtUyTpK/40871d6bcc460226fc152f70fdef039c/care_zoom_chat_text_bubble_1a4679b378.png?w=1256&h=1366&fit=pad&fm=webp&q=90"
            alt="error"
          />
        </div>

        <div className="land3content">
          <h3>
            With coaching programs to help with everyday challenges, therapy for
            common childhood conditions, and a digital platform, Connect, for
            support on-the-go, we’re here to help families thrive.
          </h3>

          <Image
            className="land3image2"
            src="https://i.postimg.cc/mZvhhYXv/new-url-llll.png"
            alr="error"
          />

          <a href="https://app.hellobrightline.com/sign_up">
            <button onClick={() => alert("access denied")} className="allbtn1">
              Join Today
            </button>
          </a>
          {/* <Link to="/Signup"><button className='allbtn' >Join Today</button></Link> */}
        </div>
      </div>

      {/* LAND_________4   LAND---------------4  VIDEO  */}

      <div className="videoid">
        <h2>A BRIGHTLINE EXPERIENCE</h2>
        <h1>Built for kids and teens, here for you</h1>

        <AspectRatio>
          <iframe
            className="video"
            title="naruto"
            src="https://player.vimeo.com/video/684765741?h=d71c193636&app_id=122963"
            allowFullScreen
            //
          />
        </AspectRatio>
      </div>

      <div className="land4">
        <h3>BRIGHTLINE FOR BUSINESS</h3>
        <h1>Supporting your employees starts with their families</h1>
        <p>
          More kids and teens than ever are struggling with behavioral health —
          we can change that, together
        </p>
      </div>

      {/* LAND_-------5  Land------------5 */}

      <div className="land5">
        <div className="land5image">
          <Image src="https://i.postimg.cc/YS10vr8x/land5a.png" alt="error" />
          <a href="https://www.hellobrightline.com/employers">
            <button className="allbtn">Learn More</button>
          </a>
          <p>
            1 Brightline Covid-19 Behavioral Health Indicator 2 Brightline Book
            of Business Results (Based upon Patient Reported Outcomes
            Measurement Information System (PROMIS) Parent Proxy Scale developed
            by the National Institute of Health (NIH))
          </p>
        </div>

        <div className="land5image2">
          <Image
            className="son"
            src="https://images.ctfassets.net/96gdpqkm7elu/7BGn9goikCJsxPTcQz6OWc/0986c790b298101525a3862ddf00f032/brightline_dad_son_smiling_hug_e350e05065.jpg?w=1440&h=1256&fit=crop&fm=webp&q=90"
            alt='="error'
          />
        </div>
      </div>

      <h1 className="middle">The Brightline Experience</h1>
      <p className="middlep">
        Our care was built by experts and real parents to work specifically for
        kids, teens, and their families
      </p>

      {/* LAND======6 */}
      <div className="land6">
        <div>
          <Image
            className="land6image1"
            src="https://images.ctfassets.net/96gdpqkm7elu/4JTfpWk2jEnXhtQhJ5k8hY/b5f032e189d3fc1f700f88bd4f727808/brightline_mom_daughter_teen_smiling_seafoam_b0ccb69b11.jpg?w=1440&h=1256&fit=crop&fm=webp&q=90"
            alt="error"
          />
        </div>
        <div>
          <Image
            className="land6image2"
            src="https://i.postimg.cc/FHjZXsRQ/aaaaaaaaaaa.png"
            alt="error"
          />
        </div>
      </div>

      <h1 className="middle">The right care, at the ready</h1>
      <p className="middlep">
        We've got your back with a range of options to help your family thrive
      </p>

      {/* AUTO PLAY================LAND=========7 */}

      <div className="land7">
        <div className="videoloop">
        <AspectRatio>
          <iframe
            className="video2"
            title="naruto"
            src="https://videos.ctfassets.net/96gdpqkm7elu/NUIniZpvSGriVAchc0CkN/5cd68385ea5fec50d00d14043758b024/Final_Connect_redesign_2022_1c464d7e74.mp4 "
            allowFullScreen
            //
          />
        </AspectRatio>
         
        </div>



        <div className="loopcontent">
          <Image className="land7image2" src="https://i.postimg.cc/prG3Qzrf/bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.png" alt="error"/>

          <a href="https://app.hellobrightline.com/sign_up">
            <button onClick={() => alert("access denied")} className="become
            ">
             Become a member
            </button>
          </a>


        </div>
      </div>
      
      <Heading className="goodnews">Good News</Heading>

      <div className="cardslider">
      <CardSlider/>
      </div>

      <h1 className="middle">Get started with Brightline today</h1>
      {/* LAND=====================8 =======        LAND=================8 */}

      <div className="land8">
        <div>
          <Image className="land8image1" src="https://images.ctfassets.net/96gdpqkm7elu/5ciRoOc7iSNo6evCwvKrcu/66e1aba5d9b8f65274cccc92c47c9fc4/For_Families_2x_d42220125f.png?w=4000&h=2957&fit=crop&fm=webp&q=90" alt="error"/>
        </div>


        <div className="land8b">
          <h1>For Families</h1>
          <p>Get support for whatever tough stuff you’re dealing with, from a care team who will always have your back.</p>

          <button className="allbtn2">Join Now</button>

        </div>

      </div>



      <div className="land9">
        <div>
          <Image className="land9image1" src="https://images.ctfassets.net/96gdpqkm7elu/5ciRoOc7iSNo6evCwvKrcu/66e1aba5d9b8f65274cccc92c47c9fc4/For_Families_2x_d42220125f.png?w=4000&h=2957&fit=crop&fm=webp&q=90" alt="error"/>
        </div>


        <div className="land9b">
          <h1>For Employeers and Plans</h1>
          <p>Bring extraordinary behavioral health support to children and families, when and where they need it most.</p>

         <a href="https://www.hellobrightline.com/employers"> <button className="allbtn2">For Employeers</button></a>

        </div>

      </div>
     
     
    </>
  );
};

export default Landing;
