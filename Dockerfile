FROM docker.io/floryn90/hugo:asciidoctor

WORKDIR /src

# Copy the site source
COPY . .

# Expose default dev port
EXPOSE 1313

# The base image uses ENTRYPOINT ["hugo"]
# We just pass the server commands. No URL overrides!
CMD ["server", "--bind", "0.0.0.0"]

# ENV BASE_URL="http://localhost/"
