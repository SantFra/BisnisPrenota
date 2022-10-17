import { useToggle, upperFirst } from '@mantine/hooks';
import { TextInput, PasswordInput, Paper, Title, Anchor, Group, Button, Container } from '@mantine/core';
import {useForm } from "@mantine/form"


    export default function AuthenticationForm(props) {
    
        const [type] = useToggle(['login']);

        const form = useForm({
            initialValues: {
                userName: "",
                password: "",
            },
        
            validate: {
              userName: (val) => (/^[ ]*([^.\s]+).((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i.test(val) ? null : 'Invalid username'),
              password: (val) => (val.length < 8 ? 'Password must include at least 8 characters' : null),
            },
        });

        return (
            <Container size={720} my={200}>
                <Paper radius="md" p="md" withBorder {...props}>

                    <form onSubmit={form.onSubmit(() => {})} size={420} my={40}>
                        
                        <Title
                            align="center"
                            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                            >
                            Welcome back!
                        </Title>
                        
                            <TextInput
                                fullWidth
                                my={30}
                                required
                                label="username"
                                placeholder="name.surname" 
                                value={form.values.userName}
                                onChange={(event) => form.setFieldValue("userName", event.currentTarget.value)}
                                error={form.errors.userName && "Invalid userName"}
                            />
                            
                            <PasswordInput
                                fullWidth
                                my={30}
                                required 
                                label="Password" 
                                placeholder="Your password"
                                value={form.values.password}
                                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                error={form.errors.password && 'Password should include at least 8 characters'}
                            />
                            

                            <Group position="apart" mt="xl">

                                <Anchor
                                    my={30}
                                    component="button"
                                    type="button"
                                    color="dimmed"
                                    size="xl"
                                />

                                <Button type="submit">{upperFirst(type)}</Button>
                            
                            </Group>
                    </form>
                </Paper>
            </Container>
        );
    }