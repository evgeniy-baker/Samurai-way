import styles from "./FormsControls.module.css"

export const Textarea = ({ input, meta, ...props }: any) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={hasError ? styles.formControl : ""}>
      <textarea {...input} {...props} />
      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  )
}

export const Input = ({ input, meta, ...props }: any) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={hasError ? styles.formControl : ""}>
      <input {...input} {...props} className={hasError ? styles.error : ""} />
      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  )
}
