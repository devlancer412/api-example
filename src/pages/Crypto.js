import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import OrderOverview from "../components/partials/crypto/order-overview/OrderOverview";
import CoinOrder from "../components/partials/crypto/coin-order/CoinOrder";
import UserActivity from "../components/partials/crypto/user-activity/UserActivity";
import { Card, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockBetween,
  BlockTitle,
  PreviewAltCard,
  Icon,
  Button,
  Row,
  Col,
} from "../components/Component";

const CryptoHomePage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Dashboard" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>Overview</BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome back 0x19b...4302</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand me-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v" />
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools gx-3">
                    <li>
                      <Button color="primary" className="btn-primary btn-sm">
                        <Icon name="reports"></Icon>
                        <span>All Transactions</span>
                      </Button>
                    </li>
                    <li className="nk-block-tools-opt">
                      <UncontrolledDropdown>
                        <DropdownToggle color="primary" className="btn-primary btn-icon dropdown-toggle btn-sm">
                          <Icon name="plus"></Icon>
                        </DropdownToggle>
                        <DropdownMenu end>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="user-add-fill"></Icon>
                                <span>New Buy Order</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="coin-alt-fill"></Icon>
                                <span>New Sell Orderr</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="note-add-fill-c"></Icon>
                                <span>Withdraw</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            <Col lg="12">
              <PreviewAltCard className="h-100">
                <OrderOverview />
              </PreviewAltCard>
            </Col>
            <Col lg="12">
              <Row className="g-gs">
                <Col md="6" lg="6">
                  <PreviewAltCard className="card-full">
                    <CoinOrder />
                  </PreviewAltCard>
                </Col>
                <Col md="6" lg="6">
                  <Card className="card-bordered card-full">
                    <UserActivity />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default CryptoHomePage;
