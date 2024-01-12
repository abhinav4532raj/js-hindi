// this keyword tell current context
const user={
    username:"abhi",
    price: 999,
    welcomemsg: function() {
        console.log(`${this.username } ,welcome to website`);
    }

}
user.welcomemsg()
user.username="sam"
user.welcomemsg()

function chai ()
{
    console.log(this);
}