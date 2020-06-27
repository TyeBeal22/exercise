
var students = ['Tye', 'Drew', 'Ant'];

for (i=0; i < 3; i++) {
  var studentName = prompt('What is your name?');
  if (students.includes(studentName)) {
    alert('Welcome back');
  } else {
    students.push(studentName);
  }

}

// students.forEach(x => console.log(x)); it will alert but not log ?
x = 0
while (x < students.length){
  console.log(students[x]);
}



// Get references to the #movie and #character-list elements
const movieH1 = document.querySelector('#movie');
const characterListUL = document.querySelector('#character-list');

// Set the inner text of the #movie element
movieH1.innerText = 'The Matrix';

// Define an array of characters to loop over
const characters = ['Neo', 'Trinity', 'Morpheus', 'Mr. Smith'];

// Define a placeholder for our character HTML list
let characterHTML = '';

// For each character, add an li element string to the characterHTML string
for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    characterHTML += `<li>${character}</li>`;
}

// Set the inner HTML of the character list to the characterHTML string
characterListUL.innerHTML = characterHTML;










{
  id: "image_4",
  w: 1083,
  h: 366,
  u: "",
  p: img_4,
  e: 0
}



{
  ddd: 0,
  ind: 5,
  ty: 2,
  nm: "Waves of Grain",
  refId: "image_4",
  sr: 1,
  ks: {
    o: { a: 0, k: 100, ix: 11 },
    r: { a: 0, k: 0, ix: 10 },
    p: { a: 0, k: [437.455, 445.013, 0], ix: 2 },
    a: { a: 0, k: [541.482, 182.861, 0], ix: 1 },
    s: { a: 0, k: [100, 100, 100], ix: 6 }
  },
  ao: 0,
  ip: 0,
  op: 180.00000733155,
  st: 0,
  bm: 0
}



<Popup trigger={<button className="btn-primary"> Subscribe</button>}
position="right center"
>

{close => (

  <form className="subscribe">
    <input className="subscribe-email"
    name="email"
    type="email"
    placeholder={placeholder}
     />
    <button className="btn">{buttonText} </button>

    <a className="close" onClick={close}>
       &times;
    </a>
  </form>
)}

    </Popup>


    const { placeholder, buttonText } = this.props;

    import Popup from "reactjs-popup";



    {
      "name": "my-app",
      "version": "0.1.0",
      "homepage": "OwnOurLand.com",
      "main": "server.js",
      "private": true,
      "dependencies": {
        "@babel/plugin-proposal-decorators": "^7.8.3",
        "@fortawesome/fontawesome-svg-core": "^1.2.27",
        "@fortawesome/free-brands-svg-icons": "^5.12.1",
        "@fortawesome/react-fontawesome": "^0.1.8",
        "@material-ui/core": "^4.9.7",
        "@material-ui/icons": "^4.9.1",
        "@material-ui/styles": "^4.9.6",
        "@material/tabs": "^2.3.0",
        "@testing-library/jest-dom": "^4.2.4",
        "@testing-library/react": "^9.4.0",
        "@testing-library/user-event": "^7.2.1",
        "auth0-js": "^9.12.2",
        "babel": "^6.23.0",
        "bootstrap": "^4.4.1",
        "classnames": "^2.2.6",
        "css-loader": "^3.4.2",
        "dotenv": "^8.2.0",
        "express": "^4.17.1",
        "jquery": "^3.4.1",
        "lodash": "^4.17.15",
        "mailchimp-api-v3": "^1.13.1",
        "mdbreact": "^4.25.4",
        "mobx": "^5.15.4",
        "mobx-react": "^6.2.2",
        "node-sass": "^4.13.1",
        "node-sass-chokidar": "^1.4.0",
        "nodemon": "^2.0.3",
        "query-string": "^6.11.1",
        "react": "^16.13.1",
        "react-animated-text": "^0.1.4",
        "react-awesome-slider": "^4.1.0",
        "react-bootstrap": "^0.32.4",
        "react-calendar": "^3.0.1",
        "react-dom": "^16.13.1",
        "react-hot-loader": "^4.12.20",
        "react-icons": "^3.9.0",
        "react-lottie": "^1.2.3",
        "react-modal-login": "^1.4.5",
        "react-native-vector-icons": "^6.6.0",
        "react-navigation": "^4.1.1",
        "react-paypal-express-checkout": "^1.0.5",
        "react-player": "^1.15.2",
        "react-router-dom": "^5.1.2",
        "react-scripts": "3.3.0",
        "react-slick": "^0.25.2",
        "react-slideshow-image": "^1.4.0",
        "react-style-loader": "^2.3.0",
        "react-transition-group": "^4.3.0",
        "reactjs-popup": "^1.5.0",
        "reactstrap": "^8.4.1",
        "redium": "^0.6.2",
        "redux": "^4.0.5",
        "slick-carousel": "^1.8.1",
        "style-loader": "^1.1.3",
        "styled-components": "^5.0.1",
        "to": "^0.2.9",
        "update": "^0.7.4",
        "video-react": "^0.14.1",
        "yarn": "^1.22.0"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
      },
      "eslintConfig": {
        "extends": "react-app"
      },
      "browserslist": {
        "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
        ],
        "development": [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
        ]
      },
      "devDependencies": {
        "file-loader": "^6.0.0",
        "sass-loader": "^8.0.2",
        "url-loader": "^4.0.0"
      }
    }


// javascript compared to java

    for (let i = 0; i < 5; i++){
      console.log(i)
  }

  let numArr = [1,2,3,4,5,6]

  for (let i = 0; i < numArr.length; i++){
    console.log(numArr[i])
  }


  let x = 4

  if (x > 5) {
    console.log("High")
  } else {
    console.log("Low")
  }

// java arrays can not hold more than one type of data Java however, does not have truthy/falsy.

// In Java you must declare what the condition is in order for the conditional to work properly.

  for (int i = 0; i < 5; i++){
    System.out.println(i);
}

int[] numArr = {1,2,3,4,5,6};

for (int i = 0; i <numArr.length; i ++) {
  System.out.println(numArr[i]);
}


int x = 4;

if (x > 5) {
  System.out.println("High");
} else {
  System.out.println("Low")
}


// jabrenna footer tags


<Grid item className={classes.gridItem}>
  <Grid container direction="column" spacing={2} >
     <Grid item component={Link} to="/" className={classes.links}>
         Home
     </Grid>
 </Grid>
</Grid>
 <Grid item className={classes.gridItem}>
     <Grid container direction="column" spacing={2} >
         <Grid item component={Link} to="/" className={classes.links}>
             Revolution
         </Grid>
         <Grid item component={Link} to="/" className={classes.links}>
             Services
         </Grid>
         <Grid item component={Link} to="/" className={classes.links}>
             Articles
         </Grid>
     </Grid>
 </Grid>

 // end of her tags

 // jabrenna card icons

 <IconButton aria-label="add to favorites">
   <FavoriteIcon />
 </IconButton>
 <IconButton aria-label="share">
   <ShareIcon />
 </IconButton>

 <MoreVertIcon />
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
 // end of her card stuff
import animationData from '../animations/landinganimation/data';


 //
