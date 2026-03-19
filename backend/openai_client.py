import openai

class OpenAIClient:
    def __init__(self, api_key):
        self.api_key = api_key
        openai.api_key = self.api_key

    def text_to_speech(self, text, voice='en-US-Wavenet-D'):
        """Convert text to speech using OpenAI API."""
        response = openai.Audio.create(
            model="text-to-speech",
            input=text,
            voice=voice
        )
        return response['audio_url']

    def speech_to_text(self, audio_file):
        """Convert speech to text using OpenAI API with mock support."""
        if self.is_demo_mode():
            return "This is a mock transcription for demo purposes."
        response = openai.Audio.transcribe(
            model="whisper-1",
            file=audio_file
        )
        return response['text']

    def is_demo_mode(self):
        """Check if the application is in demo mode."""
        # This can be replaced with actual demo mode logic
        return True  # For demonstration, we always return True

