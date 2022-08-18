// import { setCurrentDate } from "./../../client/src/utils/main.utils";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function server() {
  const PORT = process.env.PORT || 5000;
  const HOST = process.env.HOST || "http://localhost";
  const app = await NestFactory.create(AppModule, {
    logger: ["log", "error", "warn", "debug"],
    cors: true,
  });

  const config = new DocumentBuilder()
    .setTitle("ИС «ОТС»")
    .setDescription(
      "Информационная система для автоматизации задач по организационно-техническому сопровождению процессов капитального строительства"
    )
    .setContact("Техническая поддержка:", "", process.env.SUPPORT)
    .setVersion("1.0")
    .addTag("IS OTS")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  await app.listen(PORT, () => {
    console.log(`Сервер запущен ${HOST}:${PORT}`);
    console.log(`Документация API: ${HOST}:${PORT}/docs`);
  });
}
server();
