module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('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'),
    },
    settings: {
      defaultForm: "solemanazemih@gmail.com",
      defaultReplyTo: "solemanazemih@gmail.com",
    },
  },

  });