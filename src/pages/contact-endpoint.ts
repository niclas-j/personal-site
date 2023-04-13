import type { APIRoute } from "astro";
import TelegramBot from "node-telegram-bot-api";

const token = import.meta.env.TELEGRAM_BOT_TOKEN;
const chatId = import.meta.env.TELEGRAM_CHAT_ID;

const bot = new TelegramBot(token, { polling: false });

export const post: APIRoute = async function post({ request, redirect }) {
  const data = await request.formData();

  await bot.sendMessage(chatId, `Telefonnummer: ${data.get("phone")}, Email: ${data.get("email")}, Message: ${data.get("message")}`);

  return redirect("/contact?success=true");
};
