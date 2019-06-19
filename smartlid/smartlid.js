@charset "UTF-8";
/* Шрифт */
@font-face {
  font-family: 'Exo2R';
  src: url("/smartlid/fonts/Exo2.eot");
  src: url("/smartlid/fonts/Exo2.woff2") format("woff2"), url("/smartlid/fonts/Exo2.woff") format("woff"), url("/smartlid/fonts/Exo2.ttf") format("truetype"), url("/smartlid/fonts/Exo2.svg#ProximaNova-Regular") format("svg"), url("/smartlid/fonts/Exo2.eot?#iefix") format("embedded-opentype");
  font-weight: normal;
  font-style: normal; }

@font-face {
  font-family: 'Exo2B';
  src: url("/smartlid/fonts/Exo2B.eot");
  src: url("/smartlid/fonts/Exo2B.woff2") format("woff2"), url("/smartlid/fonts/Exo2B.woff") format("woff"), url("/smartlid/fonts/Exo2B.ttf") format("truetype"), url("/smartlid/fonts/Exo2B.svg#ProximaNova-Regular") format("svg"), url("/smartlid/fonts/Exo2B.eot?#iefix") format("embedded-opentype");
  font-weight: normal;
  font-style: normal; }

.smartlid {
  position: fixed;
  bottom: 20px; }
  .smartlid_left {
    left: 20px; }
  .smartlid_left .smartlid__modal-buttons .smartlid__call-button {
    margin-left: 10px; }
  .smartlid_left .smartlid__modal-buttons .smartlid__request-button {
    margin-left: 10px; }
  .smartlid_left .smartlid__modal-buttons .smartlid__contact-button {
    margin-left: 10px; }
  .smartlid_right {
    right: 20px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-flow: row-reverse;
        -ms-flex-flow: row-reverse;
            flex-flow: row-reverse; }
  .smartlid_right .smartlid__modal-buttons {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-flow: row-reverse;
        -ms-flex-flow: row-reverse;
            flex-flow: row-reverse; }
  .smartlid_right .smartlid__modal-buttons .smartlid__call-button {
    margin-right: 10px; }
  .smartlid_right .smartlid__modal-buttons .smartlid__request-button {
    margin-right: 10px; }
  .smartlid_right .smartlid__modal-buttons .smartlid__contact-button {
    margin-right: 10px; }
  .smartlid_visible {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; }
  .smartlid_hidden {
    display: none; }
  .smartlid__rings {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: auto;
    width: auto;
    -webkit-border-radius: 50%;
            border-radius: 50%;
    -webkit-animation-duration: 2.0s;
            animation-duration: 2.0s;
    -webkit-animation-name: smartlidRings;
            animation-name: smartlidRings;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    z-index: -1; }
  .smartlid__rings:nth-child(2) {
    -webkit-animation-name: smartlidRings2;
            animation-name: smartlidRings2; }
  .smartlid__rings:nth-child(3) {
    -webkit-animation-name: smartlidRings3;
            animation-name: smartlidRings3; }
  .smartlid__nav-button, .smartlid__call-button, .smartlid__request-button, .smartlid__contact-button {
    color: #ed1b2f;
    position: relative;
    width: 60px;
    height: 60px;
    padding: 0;
    margin: 0;
    border: none;
    -webkit-border-radius: 50%;
            border-radius: 50%;
    cursor: pointer;
    outline: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center; }
  .smartlid__modal-buttons {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    line-height: 0; }
    .smartlid__modal-buttons_hidden {
      visibility: hidden; }
      .smartlid__modal-buttons_hidden .smartlid__call-button {
        -webkit-transform: scale(0);
            -ms-transform: scale(0);
                transform: scale(0);
        -webkit-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s;
        -o-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s;
        transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s; }
      .smartlid__modal-buttons_hidden .smartlid__request-button {
        -webkit-transform: scale(0);
            -ms-transform: scale(0);
                transform: scale(0);
        -webkit-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s;
        -o-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s;
        transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s; }
      .smartlid__modal-buttons_hidden .smartlid__contact-button {
        -webkit-transform: scale(0);
            -ms-transform: scale(0);
                transform: scale(0);
        -webkit-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.1s;
        -o-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.1s;
        transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.1s; }
    .smartlid__modal-buttons_open {
      visibility: visible; }
      .smartlid__modal-buttons_open .smartlid__call-button {
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
                transform: scale(1);
        -webkit-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.1s;
        -o-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.1s;
        transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.1s; }
      .smartlid__modal-buttons_open .smartlid__request-button {
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
                transform: scale(1);
        -webkit-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s;
        -o-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s;
        transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s; }
      .smartlid__modal-buttons_open .smartlid__contact-button {
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
                transform: scale(1);
        -webkit-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s;
        -o-transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s;
        transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s; }
  .smartlid__modal {
    position: fixed;
    z-index: 150;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    -webkit-animation: smartLidModalOpen .3s linear;
            animation: smartLidModalOpen .3s linear;
    overflow: hidden; }
    .smartlid__modal_open {
      overflow-y: scroll;
      -ms-overflow-style: none; }
      .smartlid__modal_open::-webkit-scrollbar {
        width: 0;
        opacity: 0; }
  .smartlid__form {
    position: relative;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    width: 100%;
    max-width: 504px;
    margin: 50px auto 0;
    padding: 50px 100px; }
    @media only screen and (max-width: 1366px) {
      .smartlid__form {
        margin: 15px auto 0;
        padding: 30px 100px; } }
    @media only screen and (max-width: 768px) {
      .smartlid__form {
        padding: 30px 15px;
        max-width: 100%;
        margin: 0 auto;
        -webkit-box-shadow: none !important;
                box-shadow: none !important; } }
    .smartlid__form_open {
      -webkit-animation: smartLidFormOpen .6s ease-in-out;
              animation: smartLidFormOpen .6s ease-in-out; }
  .smartlid__form-title {
    margin: 0 0 20px;
    font: 18px 'Exo2R', sans-serif;
    text-align: center; }
    @media only screen and (max-width: 1280px) {
      .smartlid__form-title {
        font-size: 16px; } }
    @media only screen and (max-width: 768px) {
      .smartlid__form-title {
        max-width: 304px;
        margin: 0 auto 15px; } }
  .smartlid__preloader {
    height: 2px;
    width: 100%;
    position: relative;
    display: none;
    margin-top: 10px; }
    .smartlid__preloader:before {
      content: '';
      display: inline-block;
      position: absolute;
      left: 0;
      width: 50px;
      height: 2px;
      -webkit-animation: smartlidPreloader 3s infinite;
              animation: smartlidPreloader 3s infinite; }
  .smartlid__input {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    text-align: left;
    width: 100%;
    margin-bottom: 20px;
    padding: 0 15px;
    height: 50px;
    font: 16px 'Exo2R', sans-serif;
    border: none;
    outline: none; }
    @media only screen and (max-width: 1366px) {
      .smartlid__input {
        margin-bottom: 15px;
        height: 45px; } }
    @media only screen and (max-width: 768px) {
      .smartlid__input {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        max-width: 304px;
        margin: 0 auto 15px; } }
    .smartlid__input::-webkit-input-placeholder {
      text-align: left !important; }
    .smartlid__input::-moz-placeholder {
      text-align: left !important; }
    .smartlid__input:-ms-input-placeholder {
      text-align: left !important; }
    .smartlid__input::-ms-input-placeholder {
      text-align: left !important; }
    .smartlid__input::placeholder {
      text-align: left !important; }
    .smartlid__input_file {
      display: none !important; }
    .smartlid__input_text {
      padding: 10px 15px;
      resize: none; }
  @media only screen and (max-width: 768px) {
    .smartlid__checkbox-wrapper {
      max-width: 304px;
      margin: 0 auto; } }
  .smartlid__checkbox_agreement {
    display: none; }
  .smartlid__label_agreement {
    position: relative;
    display: inline-block;
    cursor: pointer;
    text-align: left;
    margin: 0 0 20px;
    padding: 0 0 0 50px;
    font: 16px 'Exo2R', sans-serif; }
    @media only screen and (max-width: 1280px) {
      .smartlid__label_agreement {
        margin: -5px 0 15px; } }
  .smartlid__label_agreement::before, .smartlid__label_agreement::after {
    content: "";
    position: absolute;
    margin: 0;
    outline: 0;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease; }
  .smartlid__label_agreement::before {
    left: 1px;
    width: 34px;
    height: 14px;
    -webkit-border-radius: 8px;
            border-radius: 8px; }
  .smartlid__label_agreement::after {
    left: 0;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
            border-radius: 50%; }
  .smartlid__checkbox_agreement:checked + .smartlid__label_agreement:after {
    -webkit-transform: translate(80%, -50%);
    -ms-transform: translate(80%, -50%);
        transform: translate(80%, -50%); }
  .smartlid__label_agreement .toggle--on {
    display: none; }
  .smartlid__label_agreement .toggle--off {
    display: inline-block; }
  .smartlid__checkbox_agreement:checked + .smartlid__label_agreement .toggle--on {
    display: inline-block; }
  .smartlid__checkbox_agreement:checked + .smartlid__label_agreement .toggle--off {
    display: none; }
  .smartlid__form-icon {
    display: block;
    width: 100px;
    margin: 0 auto 30px; }
    @media only screen and (max-width: 1280px) {
      .smartlid__form-icon {
        width: 70px;
        margin-bottom: 15px; } }
  .smartlid__form-button {
    display: block;
    width: 100%;
    border: none;
    height: 50px;
    cursor: pointer;
    outline: none;
    font: 18px 'Exo2R', sans-serif; }
    @media only screen and (max-width: 1366px) {
      .smartlid__form-button {
        height: 45px;
        font-size: 16px; } }
    @media only screen and (max-width: 768px) {
      .smartlid__form-button {
        max-width: 304px;
        margin: 0 auto; } }
  .smartlid__file-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end; }
    @media only screen and (max-width: 768px) {
      .smartlid__file-wrapper {
        max-width: 304px;
        margin: 0 auto; } }
  .smartlid__file-name {
    width: -webkit-calc(100% - 100px);
    width: calc(100% - 100px);
    -webkit-border-radius: 2px 0 0 2px;
            border-radius: 2px 0 0 2px; }
  .smartlid__label_file {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    height: 50px;
    width: 100px;
    cursor: pointer;
    -webkit-border-radius: 0 2px 2px 0;
            border-radius: 0 2px 2px 0; }
    @media only screen and (max-width: 1366px) {
      .smartlid__label_file {
        height: 45px; } }
  .smartlid__close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font: 24px sans-serif;
    cursor: pointer;
    outline: none;
    -webkit-transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
    -o-transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s; }
    @media only screen and (max-width: 1280px) {
      .smartlid__close-button {
        right: 5px;
        top: 5px; } }
    .smartlid__close-button:hover {
      -webkit-transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
      -o-transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
      -webkit-transform: rotate(90deg);
          -ms-transform: rotate(90deg);
              transform: rotate(90deg); }

@-webkit-keyframes smartlidRings {
  from {
    opacity: 1;
    -webkit-transform: scale(0.8, 0.8);
            transform: scale(0.8, 0.8); }
  to {
    opacity: 0;
    -webkit-transform: scale(1.2, 1.2);
            transform: scale(1.2, 1.2); } }

@keyframes smartlidRings {
  from {
    opacity: 1;
    -webkit-transform: scale(0.8, 0.8);
            transform: scale(0.8, 0.8); }
  to {
    opacity: 0;
    -webkit-transform: scale(1.2, 1.2);
            transform: scale(1.2, 1.2); } }

@-webkit-keyframes smartlidRings2 {
  from {
    opacity: 0.9;
    -webkit-transform: scale(0.9, 0.9);
            transform: scale(0.9, 0.9); }
  to {
    opacity: 0;
    -webkit-transform: scale(1.4, 1.4);
            transform: scale(1.4, 1.4); } }

@keyframes smartlidRings2 {
  from {
    opacity: 0.9;
    -webkit-transform: scale(0.9, 0.9);
            transform: scale(0.9, 0.9); }
  to {
    opacity: 0;
    -webkit-transform: scale(1.4, 1.4);
            transform: scale(1.4, 1.4); } }

@-webkit-keyframes smartlidRings3 {
  from {
    opacity: 0.8;
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1); }
  to {
    opacity: 0;
    -webkit-transform: scale(1.6, 1.6);
            transform: scale(1.6, 1.6); } }

@keyframes smartlidRings3 {
  from {
    opacity: 0.8;
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1); }
  to {
    opacity: 0;
    -webkit-transform: scale(1.6, 1.6);
            transform: scale(1.6, 1.6); } }

@-webkit-keyframes smartLidModalOpen {
  0% {
    -webkit-border-radius: 100%;
            border-radius: 100%;
    width: 320px;
    height: 320px;
    -webkit-transform: scale(2);
            transform: scale(2); }
  100% {
    -webkit-border-radius: 100%;
            border-radius: 100%;
    width: 1000px;
    height: 1000px;
    -webkit-transform: scale(3);
            transform: scale(3); } }

@keyframes smartLidModalOpen {
  0% {
    -webkit-border-radius: 100%;
            border-radius: 100%;
    width: 320px;
    height: 320px;
    -webkit-transform: scale(2);
            transform: scale(2); }
  100% {
    -webkit-border-radius: 100%;
            border-radius: 100%;
    width: 1000px;
    height: 1000px;
    -webkit-transform: scale(3);
            transform: scale(3); } }

@-webkit-keyframes smartLidFormOpen {
  0% {
    opacity: 0;
    -webkit-transform: translateY(550px);
            transform: translateY(550px); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0px);
            transform: translateY(0px); } }

@keyframes smartLidFormOpen {
  0% {
    opacity: 0;
    -webkit-transform: translateY(550px);
            transform: translateY(550px); }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0px);
            transform: translateY(0px); } }

.agreement-link {
  text-decoration: none;
  font: 12px 'Exo', sans-serif; }
  .agreement-link:hover {
    text-decoration: none; }

.smartlid__nav-button, .smartlid__call-button, .smartlid__request-button, .smartlid__contact-button, .smartlid__request-button::before, .smartlid__call-button::before {
  background: #263238; }

.smartlid__request-button::before, .smartlid__call-button::before {
  color: #e2e2e2; }

.smartlid__rings {
  border: 1px solid rgba(0, 0, 0, 0.5); }

.dark-space {
  background: #263238; }
  .dark-space .smartlid__form {
    background: #263238;
    -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5); }
  .dark-space .smartlid__thank-title {
    color: #e2e2e2; }
  .dark-space .smartlid__form-title {
    color: #e2e2e2; }
  .dark-space .smartlid__form-button {
    background: #16A085;
    -webkit-border-radius: 2px;
            border-radius: 2px;
    color: #e2e2e2;
    -webkit-transition: .4s;
    -o-transition: .4s;
    transition: .4s; }
    .dark-space .smartlid__form-button:hover {
      -webkit-transition: .4s;
      -o-transition: .4s;
      transition: .4s;
      background: #2ABB9B;
      -webkit-box-shadow: 0 3px 30px rgba(0, 0, 0, 0.2);
              box-shadow: 0 3px 30px rgba(0, 0, 0, 0.2); }
  .dark-space .smartlid__close-button {
    color: #e2e2e2; }
  .dark-space .smartlid__input {
    background: #343f45;
    -webkit-border-radius: 2px;
            border-radius: 2px;
    color: #e2e2e2; }
    .dark-space .smartlid__input:focus {
      color: #e2e2e2; }
  .dark-space .smartlid__label_file {
    background: #16A085;
    color: #e2e2e2;
    font: 16px 'Exo', sans-serif; }
  .dark-space .smartlid__respond-fail {
    color: #aa5050; }
  .dark-space .smartlid__respond-success {
    color: #16A085; }
  .dark-space .smartlid__preloader {
    background: #e2e2e2; }
  .dark-space .smartlid__preloader:before {
    background: mediumturquoise; }
  .dark-space .smartlid__label_agreement:before {
    background-color: #aa5050; }
  .dark-space .smartlid__label_agreement:after {
    background-color: #e2e2e2;
    -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084); }
  .dark-space .smartlid__checkbox_agreement:checked + .smartlid__label_agreement:before {
    background-color: #A5D6A7; }
  .dark-space .smartlid__checkbox_agreement:checked + .smartlid__label_agreement:after {
    background-color: #16A085; }
  .dark-space .agreement-link {
    color: #e2e2e2 !important; }
