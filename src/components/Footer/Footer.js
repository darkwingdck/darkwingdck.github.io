import './Footer.css';

import Content from '../Ui/Content/Content';
import Text from '../Ui/Text/Text';
import Contacts from '../Contacts/Contacts';

export default function Footer() {
  return (
    <footer className="footer-container">
      <Content>
        <div className="footer">
          <div className="footer__text">
            <Text text={`© ${new Date().getFullYear()} - Daniil Zakharov. All rights reserved.`} />
          </div>
          <div className="footer__contacts">
            <Contacts direction="row" />
          </div>
        </div>
      </Content>
    </footer>
  );
};
