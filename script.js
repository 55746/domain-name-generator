let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['.com', '.net', '.io', '.ect']
for(let i in pronoun){
    for(let j in adj){
        for(let k in noun){
            for(let m in ext)
                console.log(pronoun[i] + adj[j] + noun[k] + ext[m])
        }
    }
}