import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get("name") as string
    const location = formData.get("location") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const schedule = formData.get("schedule") as string
    const consent = formData.get("consent") as string
    const extraPeople = formData.get("extraPeople") as string
    const extraTime = formData.get("extraTime") as string
    const correction = formData.get("correction") as string
    const presets = formData.get("presets") as string
    const instagram = formData.get("instagram") as string

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "📸 새로운 예약 신청",
      text: `
📌 새로운 예약이 들어왔습니다.

이름: ${name}
촬영 장소: ${location}
전화번호: ${phone}
이메일: ${email}
원하는 시간/요일: ${schedule}
업로드 동의 여부: ${consent}
인스타그램: ${instagram}
인원 추가 여부: ${extraPeople}
시간 추가 여부: ${extraTime}
보정 방향: ${correction}
선택 프리셋: ${presets}
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)
    return Response.json({ success: false }, { status: 500 })
  }
}
