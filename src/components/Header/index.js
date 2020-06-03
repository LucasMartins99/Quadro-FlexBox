import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdRestore } from 'react-icons/md';
import { Container, Cart } from './styles';


function Header({ cartSize }) {
    return (
        <Container>
            <Cart to="/cart">
                <div>
                    <strong>ACOMPANHAMENTO DE PRODUÇÃO</strong>
                </div>
                <MdRestore size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}
export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);
