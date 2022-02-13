function getSting() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world')
    }, 2000)
  })
}

async function hello() {
  let string = await getSting()
  console.log('🚀 ~ file: hello-world.js ~ line 11 ~ hello ~ string', string)
}
export default hello
