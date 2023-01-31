const handler = (req, res) => {
  console.log(req)
  res.status(200).json({ success: false })
}

export default handler
