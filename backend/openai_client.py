import openai
import base64

class OpenAIClient:
    def __init__(self):
        self.api_key = "YOUR_API_KEY"
        openai.api_key = self.api_key

    def speech_to_text(self, audio_file_path):
        with open(audio_file_path, "rb") as audio_file:
            audio_content = base64.b64encode(audio_file.read()).decode('utf-8')
        response = openai.Audio.transcribe(model="whisper-1", file=audio_content)
        return response['text']

    def text_to_speech(self, text):
        response = openai.Audio.create(text=text, voice="text-to-speech")
        audio_content = base64.b64encode(response['audio']).decode('utf-8')
        return audio_content

    def get_learned_response(self, prompt):
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}]
        )
        return response['choices'][0]['message']['content']

    def remember_response(self, memory_key, response):
        # Here you may want to implement the logic to inject the memory into the model
        pass

    
# Example usage:
# client = OpenAIClient()
# print(client.speech_to_text("path/to/audio/file.wav"))
# print(client.text_to_speech("Hello, world!"))
# print(client.get_learned_response("What is the capital of France?"))
