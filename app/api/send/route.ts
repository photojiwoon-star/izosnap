export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get("name")?.toString() || ""
    const location = formData.get("location")?.toString() || ""
    const phone = formData.get("phone")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const schedule = formData.get("schedule")?.toString() || ""
    const consent = formData.get("consent")?.toString() || ""
    const extraPeople = formData.get("extraPeople")?.toString() || ""
    const extraTime = formData.get("extraTime")?.toString() || ""
    const correction = formData.get("correction")?.toString() || ""
    const presets = formData.get("presets")?.toString() || ""
    const instagram = formData.get("instagram")?.toString() || ""

    console.log("예약 데이터:", {
      name,
      location,
      phone,
      email,
      schedule,
      consent,
      instagram,
      extraPeople,
      extraTime,
      correction,
      presets,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)
    return Response.json({ success: false }, { status: 500 })
  }
}
