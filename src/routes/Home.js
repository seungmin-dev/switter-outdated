import React, {useEffect, useState} from "react";
import {dbService} from "fbase";

const Home = () => {
    const [sweet, setSweet] = useState("");
    const [sweets, setSweets] = useState([]);
    const dbSweets = async() => {
        const dbSweets = await dbService.collection("sweets").get();
        //dbSweets.forEach((document) => console.log(document.data()));
        dbSweets.forEach((document) => {
            const sweetObj = {
                ...document.data(),
                id : document.id
            }
            setSweets((prev) => [sweetObj, ...prev]);
        });
    }
    useEffect(() => {
        dbSweets();
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("sweets").add({
            sweet,
            createdAt : Date.now()
        });
        setSweet("");
    }
    const onChange = (event) => {
        const {target:{value}} = event;
        setSweet(value);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={sweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
                <input type="submit" value="Sweet" />
            </form>
            <div>
                {sweets.map(sweet => <div key={sweet.id}>
                    <h4>{sweet.sweet}</h4>
                    </div>)}
            </div>
        </div>
    );
};
export default Home;