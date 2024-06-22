import Friend from "./Friend";

export default function FriendsList({ friends, onSelect, selectedFriend }) {
  return (
    <div>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </div>
  );
}
