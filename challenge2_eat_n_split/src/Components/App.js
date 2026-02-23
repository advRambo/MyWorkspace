import { use, useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


function Button({ children, onClick }) {
  return <button className="button" onClick={onClick}>{children}</button>
}


export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);


  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')


  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      // ...initialFriends,
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    }
    handleSetFriends(newFriend)
    console.log(friends)
    console.log(newFriend)

    setName('')
    setImage("https://i.pravatar.cc/48")
  }

  const handleAddFriend = () => {
    setShowAddFriend((currState) => !currState)
  }

  const handleSetFriends = (friend) => {
    setFriends(friends => [...friends, friend])
    setShowAddFriend(false)
  }

  const handleSelection = friend => {
    setSelectedFriend((curr) => curr?.id === friend.id ? null : friend)
    setShowAddFriend(false);
  }


  const handleSplitBill = (value) => {
    console.log(value)

    setFriends((friends) => friends.map(friend => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend))
    setSelectedFriend(null);
  }

  return (
    <div className="app" >
      <div className="sidebar">
        <FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} />

        {showAddFriend && <FormAddFriend name={name} setName={setName} image={image} setImage={setImage} handleSubmit={handleSubmit} />}

        <Button onClick={handleAddFriend}>{showAddFriend ? "Close" : "Add Friend "} </Button>

      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} friends={friends} onSplitBill={handleSplitBill} />}
      {/* <FormSplitBill friends={friends} /> */}
    </div >
  );
}


function FriendsList({ friends, onSelection, selectedFriend }) {
  // const friends = newFriend;
  return (
    <>
      <ul>
        {
          friends.map(friend => (
            <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend} />
          )
          )}
      </ul>
    </>
  )
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />

      <h3>{friend.name}</h3>

      {friend.balance < 0 && <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>}

      {friend.balance > 0 && <p className="green">{friend.name} owes you ${friend.balance}</p>}

      {friend.balance === 0 && <p>You & {friend.name} owes nothing</p>}

      <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
    </li>
  )
}

function FormAddFriend({ name, setName, image, setImage, handleSubmit }) {
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👬 Friend Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>🏙️ Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

      <Button>Add</Button>
    </form>
  )
}

function FormSplitBill({ friends, selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('')
  const [paidByUser, setPaidByUser] = useState('')
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoisPaying, setWhoIsPaying] = useState("user")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoisPaying === "user" ? paidByFriend : -paidByUser);
  }

  console.log(paidByUser)
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name} </h2>
      <label>💵 Bill Value</label>
      <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

      <label>💸 Your Expenses</label>
      <input type="text" value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

      <label>👬 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>👬 Who's Paying the bill ?</label>
      <select value={whoisPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value='user'>You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>

    </form>
  )
}