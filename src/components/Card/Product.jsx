import { useEffect, useState } from "react";
import { List, Card, Image, Typography } from 'antd';
import  '../../Main.css'
const Product = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())  
        .then(data => setItems(data.products)) 
        .catch(error => console.error('Error fetching data:', error));
    }, [])
    console.log(items);
    return (
        <div>
            <p style={{fontSize: '40px', font: 'bold'}}>Products</p>
            <List
            grid={{column: 3}}
             renderItem={(item)=> {
                return ( <Card 
                title={item.title} 
                cover={<Image className="cardImage" src={item.thumbnail}/>}
                >
                    <Card.Meta title={<Typography.Paragraph>Price: ${item.price} {" "}
                    <Typography.Text delete type="danger">{parseFloat(item.price + (item.price*item.discountPercentage)).toFixed(2)}</Typography.Text>
                    </Typography.Paragraph>}></Card.Meta>
                </Card>
                )
            }} dataSource={items}></List>
        </div>
    );
};

export default Product;