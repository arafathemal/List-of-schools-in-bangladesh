import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import ShowData from '../showData/ShowData';
import './Data.css';

const Data = () => {
    const [schoolData, setSchoolData] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("./schoolData.json")
            .then(res => res.json())
            .then(data => setSchoolData(data))
    }, []);
    // handle button
    const handleAddToData = (data) => {
        const addCart =[...cart, data];
        setCart(addCart);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            schoolData.map(data => <ShowData
                                id={data.id}
                                data={data}
                                handleAddToData={handleAddToData}
                            >
                            </ShowData>)
                        }

                    </div>
                </div>
                <div className="col-md-3">
                  <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Data;