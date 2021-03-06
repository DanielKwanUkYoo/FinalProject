# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_04_072208) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "availabilities", force: :cascade do |t|
    t.bigint "employee_id"
    t.string "day"
    t.integer "start_time"
    t.integer "end_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_availabilities_on_employee_id"
  end

  create_table "availrequests", force: :cascade do |t|
    t.bigint "employee_id"
    t.boolean "accepted"
    t.string "day"
    t.integer "start_time"
    t.integer "end_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_availrequests_on_employee_id"
  end

  create_table "employees", force: :cascade do |t|
    t.bigint "user_id"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "occupation"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_employees_on_user_id"
  end

  create_table "shifts", force: :cascade do |t|
    t.bigint "employee_id"
    t.string "day"
    t.integer "start_time"
    t.integer "end_time"
    t.integer "duration"
    t.string "note"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_shifts_on_employee_id"
  end

  create_table "timeoffrequests", force: :cascade do |t|
    t.bigint "employee_id"
    t.boolean "accepted"
    t.integer "start_month"
    t.integer "start_day"
    t.integer "end_month"
    t.integer "end_day"
    t.string "reason"
    t.integer "year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_timeoffrequests_on_employee_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "availabilities", "employees"
  add_foreign_key "availrequests", "employees"
  add_foreign_key "employees", "users"
  add_foreign_key "shifts", "employees"
  add_foreign_key "timeoffrequests", "employees"
end
