import React from "react";
import { Fb } from "../../containers/Icons/Icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import classes from "./SocialMedia.module.css";

export const SocialIcon = (props) => {
  return (
    <a
      href={props.socialLink}
      target="_blank"
      rel="nofollow"
      className={classes.dav__social_icon_link}
    >
      {props.socialIcon}
    </a>
  );
};

const SocialMedia = () => {
  return (
    <div className={classes.dav__social_icons_wrapper}>
      <SocialIcon
        socialLink="https://www.instagram.com/davsafaris/?hl=en"
        socialIcon={<InstagramIcon />}
      />
      <SocialIcon
        socialLink="https://ug.linkedin.com/in/david-mukasa-78a38a1a3"
        socialIcon={<LinkedInIcon />}
      />
      <SocialIcon
        socialLink="https://www.facebook.com/klaebb/"
        socialIcon={<Fb />}
      />
      <SocialIcon
        socialLink="https://wa.link/barf5j"
        socialIcon={<WhatsAppIcon />}
      />
      <SocialIcon
        socialLink="https://mobile.twitter.com/davsafaris"
        socialIcon={<TwitterIcon />}
      />
      <SocialIcon
        socialLink="https://www.youtube.com/channel/UCYZIcOaxLXheJ5ejwNUz7Ug"
        socialIcon={<YouTubeIcon />}
      />
    </div>
  );
};
export default SocialMedia;
