import { useEffect, useState } from "react";
import { List, Card, Image } from 'antd';
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
            <List
            grid={{column: 3}}
             renderItem={(item)=> {
                return ( <Card 
                title={item.title} 
                cover={<Image src={item.thumbnail}/>}></Card>
                )
            }} dataSource={items}></List>
        </div>
    );
};

export default Product;