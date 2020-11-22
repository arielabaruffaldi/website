import React from 'react';
import Text from "./../../components/Text/Text";
import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ items }) => {
    console.log(items)
    return (
        <ul className={styles.ServiceCard}>
            {items.map((item, index) => {
                console.log(item.listItems)
                return <li key={index}>
                    <img src={item.icon} />
                    <Text priority={3} color="black">{item.title}</Text>
                    <ul>
                        {item.listItems.map((element, index) => {
                            return <li key={index}> {element} </li>
                        })}
                    </ul>
                </li>
            })}
        </ul>
    )
}
export default ServiceCard