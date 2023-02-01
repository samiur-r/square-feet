const handler = (req: any, res: any) => {
  console.log(req.body)
  res.status(200).json({ success: false })
}

export default handler
