import { Box } from '@mui/material'
import { useEffect } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AuthButton } from '../../components/Auth/AuthButtonContainer'
import {
  AuthPageLayout,
  FormContainer,
} from '../../components/Auth/AuthPageLayout'
import { BaseInput } from '../../components/base/base-input'
import { Header } from '../../components/Header'
import { useAction } from '../../shared/hooks/useAction'
import { useTypeSelector } from '../../shared/hooks/useTypeSelector'

const ForgotPass = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FieldValues>()

  const navigator = useNavigate()
  const { forgotPass, validateCode } = useAction()

  const onSubmit: SubmitHandler<FieldValues> = data =>
    snack && snack.variant !== 'success' && !watch('code')
      ? forgotPass(data.email)
      : validateCode(data.code)

  const { snack } = useTypeSelector(state => state.snackbar)

  useEffect(() => {
    if (snack && snack.message === 'Код принят') {
      navigator(`/forgotPass/${watch('code')}`)
    }
  }, [snack])

  return (
    <>
      <Header />
      <AuthPageLayout title='Востановление пароля' simpleAuth={false}>
        <FormContainer>
          <BaseInput
            rules={{
              required: 'Email address is required',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Email is not valid',
              },
            }}
            required
            error={errors.email ? true : false}
            label='Email'
            name='email'
            helperText={errors.email?.message as string}
            control={control}
          />
          <BaseInput
            rules={{
              required: 'Code is required',
            }}
            required
            password
            disabled={
              snack &&
              snack.message !== 'Код отправлен на почту' &&
              !watch('code')
            }
            error={errors.code ? true : false}
            label='Code'
            name='code'
            helperText={errors.code?.message as string}
            control={control}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', mb: '50px' }}>
            <AuthButton
              onClick={() => navigator('/login')}
              fullWidth
              color='success'
              variant='contained'
              size='large'
            >
              Вернуться ко входу
            </AuthButton>
            <AuthButton
              sx={{ mt: '8px' }}
              onClick={handleSubmit(onSubmit)}
              fullWidth
              color='success'
              variant='contained'
              size='large'
            >
              {!(snack && snack.message === 'Код отправлен на почту') &&
              !watch('code')
                ? 'Отправить код'
                : 'Проверить код'}
            </AuthButton>
          </Box>
        </FormContainer>
      </AuthPageLayout>
    </>
  )
}

export default ForgotPass
