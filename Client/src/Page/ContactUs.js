import { Container, Paper, TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

  export function ContactUs() {

    const form = useForm({
      initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },

      validate: {
        name: (value) => value.trim().length < 2,
        email: (value) => !/^\S+@\S+$/.test(value),
        message: (value) => value.trim().length === 0,
      },
    });

    return (
      <Container size={720} my={200}>
      <Paper radius="md" p="md" withBorder>
        <form onSubmit={form.onSubmit(() => {})}>
          <Title
            order={2}
            size="h1"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
            weight={900}
            align="center"
          >
            Send us a message!
          </Title>

          <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <TextInput
              label="Name"
              placeholder="Your name"
              name="name"
              variant="filled"
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="Your email"
              name="email"
              variant="filled"
              {...form.getInputProps('email')}
            />
          </SimpleGrid>

          <Textarea
            mt="md"
            label="Message"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps('subject')}
          />

          <Group position="center" mt="xl">
            <Button type="submit" size="md">
              Send message
            </Button>
          </Group>
        </form>
        </Paper>
      </Container>
    );
  }

export default ContactUs;