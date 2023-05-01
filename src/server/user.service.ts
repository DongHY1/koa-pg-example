import { pool } from '../database/index.js'
import type { IUser, IUserRows } from '../types/index.js'

class UserService {
  async createUser(user: IUser): Promise<string> {
    const client = await pool.connect()
    const { name, password } = user
    const statement = 'INSERT INTO users(name,password) VALUES ($1,$2) RETURNING id,name'
    // update users set xxx=xxx,update_at = NOW() where id = xxx
    const values = [name, password]
    try {
      const res = await client.query(statement, values)
      const rows: IUserRows = res.rows[0]
      client.release()
      return rows.name
    }
    catch (err) {
      console.log(err.stack)
    }
  }

  async findUserByName(name: string): Promise<string> {
    // 查询用户
    const client = await pool.connect()
    const statement = 'SELECT * FROM users WHERE name = $1'
    const values = [name]
    try {
      const res = await client.query(statement, values)
      const rows = res.rows[0]
      client.release()
      return !rows ? '' : rows.name
    }
    catch (err) {
      console.log(err.stack)
    }
  }
}

export const userService = new UserService()
