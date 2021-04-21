function total(arr) {
    const sum = arr.reduce((final, nums) => final + nums);
    return sum;
}
console.log(total([1,2,3])); // 6


function stringConcat(arr) {
    const strOutput = arr.reduce((final, nums) => final += nums.toString());
    return strOutput
};
 console.log(stringConcat([1,2,3])); // "123"


function totalVotes(arr) {
    const totesVotes = arr.reduce(function(final, person) {
        if(person.voted) {
            final++;
        }
        return final
    }, 0);
    return totesVotes
;}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false}, 
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7


function shoppingSpree(arr) {
    const moneyMoney = arr.reduce(function(final, item) {
        return final += item.price;
    }, 0)
    return moneyMoney;
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishlist)); // 227005


function flatten(arr) {
    const flatArray = arr.reduce(function(final, array) {
        final = final.concat(array)
        return final;
    });
    return flatArray
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];



var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   let voteData = {
       "numYoungVotes"              : 0,
       "numYoungPeople"             : 0,
       "numMidVotesPeople"          : 0,
       "numMidsPeople"              : 0,
       "numOldVotesPeople"          : 0,
       "numOldsPeople"              : 0
    }
    const getVoteData = arr.reduce(function(final, voter) {
        if (voter.age >= 18 && voter.age <= 25) {
            voteData.numYoungPeople++;
            if (voter.voted) {
                voteData.numYoungVotes++;
            }
            return voteData.numYoungPeople && voteData.numYoungVotes;
        }
        if (voter.age >= 26 && voter.age <= 35) {
            voteData.numMidsPeople++;
            if (voter.voted) {
                voteData.numMidVotesPeople++;

            }
            return voteData.numMidsPeople && voteData.numMidVotesPeople;
        }
        if (voter.age >= 36 && voter.age <= 55) {
            voteData.numOldsPeople++;
            if (voter.voted) {
                voteData.numOldVotesPeople++;
            }
            return voteData.numOldsPeople && voteData.numOldVotesPeople;
        }
        return voteData;
    }, 0);
    return voteData;
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/