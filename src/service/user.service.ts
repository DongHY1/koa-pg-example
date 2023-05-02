import { pool } from '../database/index.js'
import type { IUser } from '../types/index.js'
import { OperateUser } from '../types/index.js'

interface IProps {
  name: string
  password?: string
}
class UserService {
  async createUser(user: IUser): Promise<string> {
    return await this.operateUser(OperateUser.Create, user)
  }

  async findUser(name: string): Promise<string> {
    // 查询用户
    return await this.operateUser(OperateUser.Find, { name })
  }

  async operateUser(operation: string, props: IProps): Promise<string> {
    const client = await pool.connect()
    let statement = ''
    let values = []
    switch (operation) {
      case OperateUser.Create:
        statement = 'INSERT INTO users(name,password) VALUES ($1,$2) RETURNING id,name'
        values = [props.name, props.password]
        break
      case OperateUser.Find:
        statement = 'SELECT * FROM users WHERE name = $1'
        values = [props.name]
        break
    }
    try {
      const res = await client.query(statement, values)
      const row = res.rows[0]
      client.release()
      return row ? row.name : ''
    }
    catch (err) {
      console.log(err.stack)
    }
  }
}

export const userService = new UserService()
