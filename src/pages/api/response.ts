const handler = (req: any, res: any) => {
  console.log(req)
  res.status(200).json({ success: true })
}

export default handler
