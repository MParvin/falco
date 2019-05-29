import LandingBlock from 'components/LandingBlock';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import LogoBNP from 'static/images/LogoBNP.png';
import LogoChooseMyCompany from 'static/images/LogoChooseMyCompany.png';
import LogoTarkett from 'static/images/LogoTarkett.png';
import LogoVoodoo from 'static/images/LogoVoodoo.png';
import Style from './CustomersBlock.style';

interface Props {
  backgroundColor?: string;
}

const CustomersBlock: React.FunctionComponent<Props> = ({ backgroundColor }) => {
  return (
    <LandingBlock backgroundColor={backgroundColor}>
      <Style.CustomersBlockContainer>
        <Style.CustomersBlockTitle>
          <FormattedMessage id={'Landing.customers_block.title'} />
        </Style.CustomersBlockTitle>
        <Style.CustomersBlockLogosContainer>
          <Style.CustomersBlockLogo src={LogoBNP} />
          <Style.CustomersBlockLogo src={LogoChooseMyCompany} />
          <Style.CustomersBlockLogo src={LogoTarkett} />
          <Style.CustomersBlockLogo src={LogoVoodoo} />
        </Style.CustomersBlockLogosContainer>
      </Style.CustomersBlockContainer>
    </LandingBlock>
  );
};

export default CustomersBlock;