import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Cart = ({ products }) => {
    const classes = useStyles();
    const EmptyCart = () => (
        <Typography variant="subtitle1">No has seleccionado ningun sanguche,
            <Link to="/" className={classes.link}>Empecemos a añadir algunos!</Link>
        </Typography>
    );
    const FilledCart = () =>(
        <>
            <Grid container spacing={3}>
                {products.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} handleEmptyCart={handleEmptyCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cartSubtotal}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Vaciar carrito</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography variant="h4">Tu carrito de compras</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCard />}
        </Container>
    )
}

export default Cart