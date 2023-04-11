import Profile from './Profile/profile';
import FriendsList from './FriendsList/friends';
import Statistics from './Statistic/statistic';
import TransactionHistory from './TransactionHistory/transaction';


import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import data from '../data/data.json';


export const App = () => {
  return (
    <div>
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
        <Statistics title="Upload stats" stats={data} />
        <FriendsList friends={friends}/>
        <TransactionHistory items = {transactions}/>
    </div>
  );
};
