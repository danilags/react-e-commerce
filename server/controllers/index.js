import React from 'react';

import { connect } from 'react-redux';

import { Link, Redirect } from 'react-router-dom';

import EmptySneaker from '../../images/emptysneakers.png';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

import FilterAndSort from './FilterAndSort';

import { convertToRupiah } from '../../utils/Fungsi';

class PageSearchDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handlePrice(price) {
    // console.log("PRICE : -> ", price);
    if (price == null) {
      return (
        <p style={{ paddingTop: '5px' }}>Out of Stock</p>
      )
    } else {
      return (
        <div>
          <p style={{ paddingBottom: '5px', paddingTop: '5px' }}>Harga dari</p>
          <p>Rp. { convertToRupiah(Number(price.asking_price))}</p>
        </div>
      )
    }
  }

  checkingSearchResult () {
    const { dataProduct } = this.props;
    if (dataProduct.searchKeyword !== '' && dataProduct.errorMessageSearch == '') {
			return (
        <Container>
          <Row>
  				{
  					this.props.dataProduct.searchResult.map((a, index) => {
              return (
                <Col key={index} className="wrapper-search-result" sm="6" xs="6" md="3">
      							<Link
                      to={`/sneakers/${ a.id }/${ a.slug }`}
                      className="item-search details-search">
      								<div className="image-result">
                        {
                          a.product_variant_images.length == 0 ?
                          <img src={EmptySneaker} alt="Northern Lights" width="100%" height="100%" />
                          :
                          <img src={`${a.product_variant_images[0].URL}`} alt="Northern Lights" width="100%" height="100%" />
                        }
      								</div>
                      <div className="desc__product">
                        {
                          a.available_sizes === undefined ?
                          <div className="avalaible__size">
                            <h3>Size tidak tersedia</h3>
                          </div>
                          :
                          <div className="avalaible__size">
                            <h3>
                              {
                                a.available_sizes.length === 0 ?
                                ''
                                :
                                'Available'
                              }
                            </h3>
                            <div className="container__item__size">
                              {
                                a.available_sizes.map((size, index) => (
                                  <h3 key={index} className="item__size">{ size.US }</h3>
                                ))
                              }
                            </div>
                          </div>
                        }
                        <div className="price__product">
                          {
                            this.handlePrice(a.latest_price)
                          }
                        </div>
                      </div>

      							</Link>
      					</Col>
              )
            })
  				}
  				</Row>
        </Container>
			)
		} else if (dataProduct.searchResult.length == 0) {
      if (dataProduct.errorMessageSearch == '') {
        return (
          <Container className="page-container" style={{minHeight:500, display:'flex',alignItems:'center',flexDirection:'row'}}>
            <div style={{flex:1 }}>
                <div style={{width:300,margin:"15px auto"}}>
                    <div className="progress-load"
                      style={{ display: 'flex', justifyContent: "center",alignItems: "center" }}>
                      <h3>Loading...</h3>
                    </div>
                </div>
            </div>
          </Container>
        )
      }
			return (
        <Container className="page-container" style={{minHeight:500, display:'flex',alignItems:'center',flexDirection:'row'}}>
          <div style={{flex:1}}>
              <div style={{width:300,margin:"15px auto"}}>
                  <h1 className="text-center">404 Not Found</h1>
                  <h5 className="text-center">Sneaker tidak ditemukan</h5>
              </div>
          </div>
        </Container>
			)
		}
  }

  _renderSearchSummary() {
    const { searchKeyword, searchResult, redirectSearch, searchResultTmp, isFiltering, errorMessageSearch } = this.props.dataProduct;
    const counterSearch = isFiltering == true ? searchResultTmp.length : searchResult.length
    const counterFilter = searchResult.length
    return (
      <Container>
        <Row>
          <div className="counter__search">
            <h3>Hasil Pencarian: </h3>
            <h3 className="search__keyword">'{ searchKeyword  }'</h3>
            <h3 className="search__counter">({
              searchResult.length == 0 && errorMessageSearch == '' ?
              'Loading...' :
              counterSearch
            })</h3>
          </div>
        </Row>
        {
          isFiltering === true ?
          <Row>
            <div className="counter__search">
              <h3>Hasil Filter: </h3>
              <h3 className="search__keyword">'{ searchKeyword  }'</h3>
              <h3 className="search__counter">({ counterFilter  })</h3>
            </div>
          </Row>
          :
          null
        }
      </Container>
    )
  }

  render () {
    const { dataProduct } = this.props;
    console.log("PROPS COY ", this.props);
    if (dataProduct.redirectSearch == true && dataProduct.searchResult.length == 0 && dataProduct.errorMessageSearch == '') {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <Container fluid>
        <div className="page-container">
          {
            // hasil percarian dan counter pencarian
            this._renderSearchSummary()
          }
          <FilterAndSort />
          {
            this.checkingSearchResult()
          }
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  dataProduct: state.dataProduct
})

export default connect(mapStateToProps, null)(PageSearchDetails);
