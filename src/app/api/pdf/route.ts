import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { getLocale } from "next-intl/server";


export async function GET(req: NextRequest) {
  const locale = req.nextUrl.searchParams.get("locale");
  const browser = await puppeteer.launch({
    headless: true,
  });

  try {
    const page = await browser.newPage();

    const origin = req.nextUrl.origin;

    console.log("Opening:", `${origin}/${locale}/cv`);
    const response = await page.goto(`${origin}/${locale}/cv`, {
      waitUntil: "networkidle2",
      timeout: 60000,
    });

    console.log("Page status:", response?.status());

    const pdf = await page.pdf({
      format: "A3",
      printBackground: true,
    });

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="CV_Dmitry_Lukyanov.pdf"',
      },
    });
  } catch (error) {
    console.error("PDF ERROR:", error);

    return NextResponse.json(
      {
        error: String(error),
      },
      {
        status: 500,
      }
    );
  } finally {
    await browser.close();
  }
}