module.exports = {

  //show home
  showHome: (req,res) => {
    res.render('pages/home', {layout:'stackx-layout'})
  },

  showForum: (req,res) => {
    res.render('pages/forum')
  }
}
