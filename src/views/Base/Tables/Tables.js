import React, {Component} from 'react';
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';


class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa icon-user"></i> Personal Information
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Polar ID</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Date of Birth</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td> </td>
                    </tr> 
                    <tr>
                      <td>Heart rate</td>
                      <td> </td>
                    </tr>
                  </tbody>
                </Table>


              </CardBody>
            </Card>
          </Col>

<Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa icon-user"></i> Activity
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <tbody>
                  <tr>
                    <td>ID </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Transaction-id </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Calories</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Active-calories</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>active-steps</td>
                    <td></td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>


         

        </Row>

        <Row>

           <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa icon-user"></i> Physical-information
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <tbody>
                  <tr>
                    <td>ID </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Transaction-id </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Maximum-heart-rate</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Resting-heart-rate</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Aerobic-threshold</td>
                    <td></td>
                  </tr>
                 <tr>
                    <td>Anaerobic-threshold</td>
                    <td></td>
                  </tr> 
                  <tr>
                    <td>Vo2-max</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Weight-source</td>
                    <td></td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa icon-user"></i> Exercise
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <tbody>
                  <tr>
                    <td>ID </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Transaction-id </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>Device</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Start-time</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>calories</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Distance</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>heart-rate</td>
                    <td></td>
                  </tr>
                 <tr>
                    <td>Anaerobic-threshold</td>
                    <td></td>
                  </tr> 
                  <tr>
                    <td>Vo2-max</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Weight-source</td>
                    <td></td>
                  </tr>
                  </tbody>
                </Table>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Tables;
