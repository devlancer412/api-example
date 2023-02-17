import React from "react";
import Logo from "../../images/logo.svg";
import LogoDark from "../../images/logo.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, PreviewCard } from "../../components/Component";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <React.Fragment>
      <Head title="Forgot-Password" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body wide-xs dark-mode">
          <div className="brand-logo pb-4 text-center">
            <Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>
          <PreviewCard className="card-bordered h-100 card" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h4">Cilistia's Testnet Whitelist</BlockTitle>
                <BlockDes>
                  <p>If you forgot your password, well, then we’ll email you instructions to reset your password.</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            <form>
              <div className="form-group">
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                    EVM Compatible Wallet Address
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="default-01"
                  placeholder="Please provide your wallet address"
                />
              </div>
              <div className="form-group">
                <Button color="primary" size="lg" className="btn-block" onClick={(ev) => ev.preventDefault()}>
                  Register
                </Button>
              </div>
            </form>
          </PreviewCard>
        </Block>
      </PageContainer>
    </React.Fragment>
  );
};
export default ForgotPassword;
