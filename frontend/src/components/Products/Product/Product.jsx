import { AddShoppingCart } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import useStyles from './styles'
const Product = ({ product }) => {
    const classes = useStyles();//hooks
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price}
                    </Typography>
                </div>
                <Typography variant='body2' color='textSecondary'>
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>

        </Card>
    );
}

export default Product